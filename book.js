class Book {
    constructor(title,author,description,pages,currentPage,read) {
      this.title = title;
      this.author = author ;
      this.description = description;
      this.pages = pages ;
      this.currentPage = currentPage;
      this.read = read ;
    }
  
    readBook(page) {
        
        if(page < 1 || page > pages ){
            return 0 ;
        }

        if(page >= 1 || page < pages ){
            
            return this.currentPage ;
        }
      
        if (page = pages){

        }
    }
  }

objet= new Book ('symfony5', 'Christ','cous de symfony5', 100, 0,0);

console.log(objet);