import { Component, OnInit } from '@angular/core';
import { IList, IStyle, ITable, ITL } from '../shared/models/style.inteface';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  mainStyle: IStyle = {
    textSize: '',
    fontFamily: 'Time New Roman',
    color: '',
    bgColor: '',
    bold: false,
    italic: false
  }

  addCheck: ITL = {
    table: true,
    list: false
  }

  checkEdit = false;
  checkStyle = false;
  checkSave = false;
  textColor = false;
  bgColor = false;
  backOfft = false;
  backOffb = false;

  addStatus = false;

  tableData: ITable = {
    row: 1,
    cell: 1,
    width: 10,
    height: 10,
    borderWidth: 1,
    borderType: 'solid',
    borderColor: 'black'
  }

  listData: IList = {
    lisItems: 1,
    typeMark: 'circle'
  }

  mainContent = '<h1>Lorem</h1> Ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum iusto obcaecati adipisci. Odio blanditiis adipisci voluptate harum ullam debitis doloribus necessitatibus nisi illo commodi laboriosam nobis minus nam voluptatibus cupiditate reprehenderit pariatur non, aut ex consectetur labore architecto dignissimos natus. Quam modi ab dicta esse minus cumque architecto fugit est quis? Quod blanditiis eligendi iste aperiam, voluptatibus beatae?Odio praesentium a maiores esse odit necessitatibus deleniti rerum voluptatum ea sunt iure excepturi enim sed nesciunt quidem, blanditiis asperiores veniam ullam, quaerat maxime similique? Eum nostrum dicta, eligendi quam at pariatur odit numquam provident amet adipisci mollitia dolore, repellendus reiciendis ullam eos magnam cumque ad, tempore quasi nihil cum! Magnam exercitationem illo enim vel, velit quibusdam aspernatur distinctio accusantium labore facilis beatae doloremque, rem maiores! Esse delectus porro temporibus quasi distinctio consequuntur iure hic voluptatum amet corporis cumque, alias officia illo. Explicabo suscipit nihil at deserunt cum facere commodi odio repudiandae ea esse nisi perspiciatis labore mollitia, autem minus iste perferendis ipsam laboriosam fugiat saepe sint a magnam sit dignissimos? Temporibus a, doloribus, alias quis voluptatem id enim vitae natus eveniet, itaque impedit esse repellat. Laboriosam, harum, ullam tempora alias molestiae obcaecati tenetur necessitatibus est, error minima quam cupiditate eum!'

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.updateFirstBlock();
    }, 1)
  }

  changeEdit(): void {
    this.checkEdit = !this.checkEdit;
  }
  updateFirstBlock(): void {
    if (!this.addStatus) {
      let myContainer = <HTMLElement>document.querySelector('.first-block');
      myContainer.innerHTML = this.mainContent;
    }
  };
  textColorChange(): void {
    if (this.backOfft) {
      this.textColor = !this.textColor;
    } else {
      this.textColor = false;
    }
  }
  bgColorChange(): void {
    if (this.backOffb) {
      this.bgColor = !this.bgColor;
    } else {
      this.bgColor = false;
    }
  }

  changeAddStatus(): void {
    this.addStatus = !this.addStatus;
  }

  checkTl(table: boolean): void {
    if (table == true) {
      this.addCheck.table = true;
      this.addCheck.list = false;
    } else {
      this.addCheck.list = true;
      this.addCheck.table = false;
    }
  }


  createTable() {
    let data = this.tableData;
    const tbl = document.createElement('table');
    tbl.style.border = `${data.borderWidth}px ${data.borderType} ${data.borderColor}`;
    for (let i = 0; i < data.row; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < data.cell; j++) {
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(`${i}/${j}`));
        td.style.width = `${data.width}px`;
        td.style.height = `${data.height}px`;
        td.style.border = `${data.borderWidth}px ${data.borderType} ${data.borderColor}`;
      }
    }
    this.changeAddStatus();
    setTimeout(() => {
      this.updateFirstBlock();
      this.mainContent += tbl.outerHTML;
    }, 1)
  }

  createList() {
    let data = this.listData;
    const ul = document.createElement('ul');
    ul.style.listStyle = `${data.typeMark}`;
    for (let i = 0; i < data.lisItems; i++) {
      const li = document.createElement("li")
      li.appendChild(document.createTextNode('??????????'));
      ul.appendChild(li);
    }
    this.changeAddStatus();
    setTimeout(() => {
      this.updateFirstBlock();
      this.mainContent += ul.outerHTML;
    }, 1)
  }
}
