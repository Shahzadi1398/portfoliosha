import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items =['A Computer Science & Engineering graduate with Backend Developing skills in Spring Boot. Always looking to establish a long term career in a company where I may utilise my skill set and knowledge to be an effective software developer and inspiration to those around me. Enjoy creative problem solving and getting exposure to multiple projects, and I would excel in the collaborative environment on which your company prides itself.'];

  downloadPDF(){
    let link = document.createElement("a");
    link.download ="Shahzadi_Parveen.pdf";
    link.href = "assets/Shahzadi Parveen-2.pdf";
    link.click();
  }
}
