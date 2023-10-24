interface IDateProvider {
  formatDate(date: Date);
  calculateYears(date : Date) : number;
}

export { IDateProvider };
