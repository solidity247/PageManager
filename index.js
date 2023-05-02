const words = [
  "apple",
  "apricot",
  "arrow",
  "banana",
  "brownie",
  "butter",
  "cat",
  "coffee",
  "cookie",
  "dog",
  "dolphin",
  "dragon",
  "elephant",
  "emu",
  "flamingo",
  "fox",
  "grape",
  "giraffe",
  "hedgehog",
  "hippo",
  "iguana",
  "icecream",
  "jaguar",
  "jelly",
  "kiwi",
  "kangaroo",
  "lemon",
  "lion",
  "mango",
  "monkey",
  "noodle",
  "nutella",
  "ostrich",
  "orange",
  "ocean",
  "penguin",
  "pizza",
  "quail",
  "quiche",
  "rabbit",
  "rooster",
  "squirrel",
  "strawberry",
  "tiger",
  "turtle",
  "unicorn",
  "umbrella",
  "vanilla",
  "watermelon",
  "whale",
  "xylophone",
  "yak",
  "yellow",
  "zebra",
  "zigzag",
  "zucchini",
]; // 56 ---> 6 -> 10 + 10 + 10 + 10 + 10 + 6

class PageClass {
  // data;
  // pageSize;
  // numOfPages;
  // currentPage;
  // nextPage;
  // previousPage;

  constructor(data, pageSize) {
    // providing initial parameters to our class;
    this.data = data;
    this.pageSize = pageSize;
    // calculating number of pages;
    this.numOfPages = Math.ceil(data.length / pageSize);
    // creating and assigning current, previous and next pagesas properties
    this.pagesAssigner();
  }

  // method to create and assign prev, current and next pages
  pagesAssigner(page = 1) {
    // making sure the page number is legit to not to assign current pare out of pages range 
    if (page < 1 || page > this.numOfPages) {
      return;
    }
    this.currentPage = page;
    this.nextPage = page + 1 > this.numOfPages ? null : page + 1;    // if next page refers to out of range, assigning it to null
    this.previousPage = page - 1 < 1 ? null : page - 1;              // // if previous page refers to 0 or less, assigning it to null
  }

  // this method returnes slice of data regarding to current page number
  getPageSlice() {
    // pointing to the begiening of slice
    const startPointer = (this.currentPage - 1) * this.pageSize;
    // pointing to the end of the slice
    const endPointer =
      startPointer + this.pageSize >= this.data.length
        ? this.data.length
        : startPointer + this.pageSize;    
    let dynamicPointer = startPointer;
    const pageSlice = [];
    while (dynamicPointer < endPointer) {
      pageSlice.push(this.data[dynamicPointer]);
      dynamicPointer++;
    }
    return pageSlice;
  }

  // method jump returns neither slice of the page #1 or any orther page if number of the page provided 
  jump(page = 1) {
    this.pagesAssigner(page);
    const pageSlice = this.getPageSlice();
    console.log(`elements of page ${this.currentPage} are:`, pageSlice);
    return pageSlice;
  }

  // this metod reassignes current page to next and returns a slice using jump // needs update, logic is not fully efficient
  next() {
    this.pagesAssigner(this.nextPage);
    this.jump(this.currentPage);
  }

  // this metod is similair to jump, reassignes current page to next and returns a slice
  nextUpdated() {
    this.pagesAssigner(this.nextPage);
    const pageSlice = this.getPageSlice();
    console.log(`elements of page ${this.currentPage} are:`, pageSlice);
    return pageSlice;
  }

  prev() {
    this.pagesAssigner(this.previousPage);
    this.jump(this.currentPage);
  }
  
  // nethod show gives an opinion to illustrate all class properties
  show() {
    console.log(this);
  }
}

const PageManager = new PageClass(words, 10);

PageManager.jump(3);

PageManager.prev();
PageManager.prev();
PageManager.prev();
PageManager.prev();
PageManager.next();

// PageManager.show();
