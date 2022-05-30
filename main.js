class Main {
   constructor() {}

   open() {
      var doors = document.getElementsByClassName('preview');
      Array.from(doors).forEach((element) => element.classList.add('open'));
   }
}
