import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatherModule } from 'angular-feather';
import { NgModule } from '@angular/core';

// For Feather icon you have to import the icons first
import { Camera, Heart, Github, MoreVertical, Menu, Users, Globe,
  Map, Search, PlusCircle, ChevronRight, ChevronLeft } from 'angular-feather/icons';

// Then add them to an object
const icons = {
  Camera,
  Heart,
  Github,
  MoreVertical,
  Menu,
  Users,
  Globe,
  Map,
  Search,
  PlusCircle,
  ChevronRight,
  ChevronLeft,
};

@NgModule({
  imports: [
    // Just import the fontawesome icons
    FontAwesomeModule,

    // Then finally import the feathericon adding the choosen icons
    FeatherModule.pick(icons),
  ],
  exports: [
    FontAwesomeModule,
    FeatherModule,
  ]
})

/**
 * @description I added both font awesome and feather icon together
 */
export class NgIconsModule { }
