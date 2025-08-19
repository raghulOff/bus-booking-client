import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { BUS_ENDPOINTS } from '../../../services/api-endpoints';
import { service } from '@ember/service';

export default class AddBusFormComponent extends Component {
  @service bus;
  @tracked upperSeats = [];
  @tracked lowerSeats = [];
  @tracked lowerDeck = false;
  @tracked upperDeck = false;
  @tracked lowerRowInputs = {};
  @tracked upperRowInputs = {};
  @tracked editSeatTypeId = 1;
  @tracked editSeatTypeName = 'SEATER';

  @tracked vehicleNumber = '';
  @tracked operatorName = '';
  @tracked busType = '';
  @tracked totalColumns = null;
  @tracked addBusLoading = false;




  @service apiPost;

  @action updateSeatType(field, event) {
    const seatId = event.target.value;
    this[field] = seatId;
    this.bus.seatTypes.forEach((seatType) => {
      if (seatType.seatTypeId == seatId) {
        this.editSeatTypeName = seatType.seatTypeName;
      }
    });
  }

  @action updateField(field, event) {
    this[field] = event.target.value;
  }

  @action
  changeSeatType(seat) {
    if (seat.pos === 'LOWER') {
      this.lowerSeats = this.lowerSeats.map((col) => {
        return {
          ...col,
          row_seats: col.row_seats.map((lseat) => {
            if (
              lseat.row_number === seat.row_number &&
              lseat.col_number === seat.col_number
            ) {
              return {
                ...lseat,
                seat_type_id: this.editSeatTypeId,
                seat_type_name: this.editSeatTypeName,
              };
            }
            return lseat;
          }),
        };
      });
    } else {
      this.upperSeats = this.upperSeats.map((col) => {
        return {
          ...col,
          row_seats: col.row_seats.map((useat) => {
            if (
              useat.row_number === seat.row_number &&
              useat.col_number === seat.col_number
            ) {
              return {
                ...useat,
                seat_type_id: this.editSeatTypeId,
                seat_type_name: this.editSeatTypeName,
              };
            }
            return useat;
          }),
        };
      });
    }
  }

  constructor() {
    super(...arguments);
    this.bus.fetchSeatTypes();
  }

  addRowSeats(seats, COLNUMBER, POS, rows) {
    let updatedSeats = seats.map((seatCol) => {
      if (seatCol.colNumber === COLNUMBER) {
        const row_seats = [];
        for (let i = 1; i <= rows; i++) {
          const seat = {
            row_number: i,
            col_number: COLNUMBER,
            seat_type_id: 1,
            pos: POS,
            seat_type_name: 'SEATER',
          };
          row_seats.push(seat);
        }
        return { ...seatCol, row_seats };
      }
      return seatCol;
    });

    if (POS === 'LOWER') {
      this.lowerSeats = updatedSeats;
    } else {
      this.upperSeats = updatedSeats;
    }
  }

  @action
  handleNoOfRows(COLNUMBER, POS, event) {
    let rows = event.target.value;
    if (rows > 15) {
      return;
    }
    // rowno, colno, seatypeid, pos

    if (POS === 'LOWER') {
      this.lowerRowInputs = { ...this.lowerRowInputs, [COLNUMBER]: rows };
      this.addRowSeats(this.lowerSeats, COLNUMBER, POS, rows);
    } else if (POS === 'UPPER') {
      this.upperRowInputs = { ...this.upperRowInputs, [COLNUMBER]: rows };
      this.addRowSeats(this.upperSeats, COLNUMBER, POS, rows);
    }
  }

  @action
  handleDeckExist(event) {
    const name = event.target.name;
    if (name === 'lower') {
      this.lowerDeck = !this.lowerDeck;
    } else if (name === 'upper') {
      this.upperDeck = !this.upperDeck;
    }
  }

  @action
  handleColumns(event) {
    if (event.target.value > 3) {
      this.totalColumns = null;
      return;
    }
    this.totalColumns = event.target.value;
    this.upperSeats = [];
    this.lowerSeats = [];

    for (let i = 1; i <= this.totalColumns; i++) {
      const seatColLower = { colNumber: i, row_seats: [] };
      const seatColUpper = { colNumber: i, row_seats: [] };
      this.lowerSeats.push(seatColLower);
      this.upperSeats.push(seatColUpper);
    }
  }

  @action
  async addBus() {
    // Build seatGridCount (column-wise deck row count)
    const seatGridCount = [];

    Object.entries(this.lowerRowInputs).forEach(([col, rows]) => {
      seatGridCount.push({
        col_number: Number(col),
        total_rows: Number(rows),
        pos: 'LOWER',
      });
    });

    Object.entries(this.upperRowInputs).forEach(([col, rows]) => {
      seatGridCount.push({
        col_number: Number(col),
        total_rows: Number(rows),
        pos: 'UPPER',
      });
    });

    // Build seatDetails from lower and upper seats
    const seatDetails = [];

    this.lowerSeats.forEach((col) => {
      col.row_seats.forEach((seat) => {
        seatDetails.push({
          row_number: seat.row_number,
          seat_type_id: seat.seat_type_id,
          col_number: seat.col_number,
          pos: 'LOWER',
        });
      });
    });

    this.upperSeats.forEach((col) => {
      col.row_seats.forEach((seat) => {
        seatDetails.push({
          row_number: seat.row_number,
          seat_type_id: seat.seat_type_id,
          col_number: seat.col_number,
          pos: 'UPPER',
        });
      });
    });

    const data = {
      vehicleNumber: this.vehicleNumber,
      operatorName: this.operatorName,
      busType: this.busType,
      seatGridCount,
      seatDetails,
      totalColumns: this.totalColumns,
    };

    this.addBusLoading = true;
    const response = await this.apiPost.post(BUS_ENDPOINTS.addBus, data);

    this.bus.fetchBuses();

    const result = await response.text();
    alert(result);
    this.addBusLoading = false;
  }
}
