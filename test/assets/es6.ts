
export function async_await() {
  // printDelayed is a 'Promise<void>'
  async function delay(milliseconds: number) {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  async function printDelayed(elements: string[]) {
    for (var element of elements) {
      await delay(50);
      console.log(element);
    }
  }

  return printDelayed(["Hello", "beautiful", "asynchronous", "world"])
    .then(() => {
      console.log("Printed every element!");
    });
}