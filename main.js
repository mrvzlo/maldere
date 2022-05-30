class Main {
   constructor() {}

   open() {
      var doors = document.getElementsByClassName('preview');
      console.log(2);
      Array.from(doors).forEach((element) => element.classList.add('open'));
   }
}
