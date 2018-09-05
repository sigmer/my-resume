export class Job {
  constructor(
    public companyName: string,
    public jobTitle: string,
    public startDate: Date,
    public endDate?: Date,
    public description?: string
  ) { }
}
