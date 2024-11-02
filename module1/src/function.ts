{
// function

function great(name:string):string{
    return `Hello, ${name}`
}

// Default Parameters

function great2(name:string = 'niloy'):string{
    return `Hello, ${name}`;

}

// Void Return Type: Use void for functions that don’t return anything.
function logMessage(message: string): void {
    console.log(message);
  }

// array function
  const arr:number[] = [2,5,7];

  const arrayNumber:number[] = arr.map((elem:number):number=> elem * elem)


}