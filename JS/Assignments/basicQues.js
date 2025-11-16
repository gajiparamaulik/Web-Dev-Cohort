// Callback Function

function firstTask(callBackFun) {   // 👈 you can name it anything
    console.log("Task 1 started...");

  setTimeout(() => {
      console.log("Task 1 finished!");
      callBackFun();  // 👈 just make sure you call it by the same name
  }, 2000);
}

function showMessage() {
  console.log("This is the callback function!");
}

firstTask(showMessage); // ✅ works perfectly