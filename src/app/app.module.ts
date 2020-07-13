import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { PageMenuComponent } from './header/page-menu/page-menu.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';
import { ShopContentComponent } from './shop/shop-content/shop-content.component';
import { ViewedComponent } from './viewed/viewed.component';
import { BrandsComponent } from './brands/brands.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductComponent } from './product/product.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    HeaderMainComponent,
    HeaderNavComponent,
    PageMenuComponent,
    ShopComponent,
    ShopSidebarComponent,
    ShopContentComponent,
    ViewedComponent,
    BrandsComponent,
    NewsletterComponent,
    FooterComponent,
    CopyrightComponent,
    ProductItemComponent,
    ProductComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
