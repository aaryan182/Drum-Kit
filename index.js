let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    for(let i=0;i<10;i++) {
      setTimeout(() => {audio.play()},0.5);
    }
    console.log(i);
  });
}
  