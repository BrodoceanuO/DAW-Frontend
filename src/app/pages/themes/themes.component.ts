import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  public themes:any[] = [];
  constructor(private themeService:ThemeService) { }

  ngOnInit(): void {
    this.getAllThemes();
  }

  getAllThemes(){
    this.themeService.getThemes().subscribe((response: any) => {
      this.themes = response.getThemes;
    });
  }

}
