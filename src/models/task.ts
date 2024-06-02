export enum Status{
    pending,
    review,
    complete
}


export default interface Task{
    'title': string,
    'description': string,
    'status': Status
}