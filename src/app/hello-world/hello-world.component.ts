import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})

export class HelloWorldComponent {
  title: string = 'front-end-kurssi'; // ": string" ei ole pakollinen määritys
}

