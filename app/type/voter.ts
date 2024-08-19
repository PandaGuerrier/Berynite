export type Voter = {
  userId: number
  pollId: number
  vote: Vote
}

export enum Vote {
  Yes = 'yes',
  No = 'no'
}
