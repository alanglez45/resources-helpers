# **CSS Helpers**

## Menú

- [Responsive Web Design - Media Queries](#responsive-web-design---media-queries)
- [Media Queries Range Syntax](#media-queries-range-syntax)
- [Font Size (REM Hack)](#font-size-rem-hack)
- [Box-sizing: Border-box](#box-sizing-border-box)
- [Mobile Font Sizes](#mobile)
- [Desktop Font Sizes](#desktop)
- [IMG Responsive](#img-responsive)
- [Anchor Tag | a Tag](#anchor-tag--a-tag)
- [Get Directions Form (Google Maps)](#get-directions-form-google-maps)
- [Restrict Uploads to Specific Types](#restrict-uploads-to-specific-types)
- [Autocomplete Off Inputs](#autocomplete-off-inputs)
- [Display My Website (Dev) on a Phone](#display-my-website-dev-on-a-phone)
- [Nice Fonts](#nice-fonts)

## Responsive Web Design - Media Queries

    // Mobile
    @media (min-width: 320px) and (max-width: 480px)  {

    }

    // Tablet
    @media (min-width: 481px) and (max-width: 768px)  {

    }

    // Laptop
    @media (min-width: 769px) and (max-width: 1023 px)  {

    }

    // Desktop
    @media (min-width: 769px) and (max-width: 1023 px)  {

    }

    // TV / Extra large
    @media (min-width: 1201px) {

    }

    // Monitor 27"
    @media (min-width: 1920px) {

    }

 #### Media Queries Range Syntax    

    // sintaxis clásica
    @media screen and (min-width: 600px) {
        .element {
            /* La media query se aplica para resoluciones 
            mayores a 600px*/
        }
    }

    // sintaxis de rango
    @media screen and (width >= 375px) {
        .element {
            /* La media query se aplica para 
            resoluciones mayores o iguales a 600px */
        }
    }

---
    // sintaxis clásica
    @media screen and (min-width: 400px) and (max-width: 1000px) {
        .element {
            /* La media query se aplica para 
            resoluciones entre 400px y 1000px */
        }
    }

    //sintaxis de rangos
    @media screen and (400 <= width <= 1000) {
        .element {
            /* La media query se aplica para 
            resoluciones entre 400px y 1000px */
        }
    }

---

## Font size (REM HACK)

    html {
        font-size: 62.5% /* 1 REM = 10px*/
    }

## Box-sizing: Border-box 

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }


content-box:\
This is the initial and default value as specified by the CSS standard. The width and height properties include the content, but does not include the padding, border, or margin.

border-box:\
The width and height properties include the content, padding, and border, but do not include the margin.

### Mobile

    .smallest {
        font-size: 12px;
    }

    /* 13 - 14px */
    .details {
        font-size: 13px;
    }

    /* 16 –18px */
    .body-text {  {
        font-size: 16px;
    }

    /* 18 – 20px */
    .subtitle {
        font-size: 18px;
    }

    /* 24 – 28px */
    .title {
        font-size: 24px;
    }

    /* 32 – 38px */
    .header {
        font-size: 32px;
    }

### Desktop

    .smallest {
        font-size: 16px;
    }

    /* 16 – 18px */
    .details {
        font-size: 18px;
    }

    /* 20 – 21px */
    .body-text {  {
        font-size: 20px;
    }

    /*  21 – 24px */
    .subtitle {
        font-size: 21px;
    }

    /* 34 – 38px */
    .title {
        font-size: 34px;
    }

    /* 40 – 48px */
    .header {
        font-size: 40px;
    }



## IMG Responsive

    img {
        max-width: 100%;
    height: auto;
    }

    img {
        width: 100%;
    }


## Anchor Tag | a Tag 


Safe links

    <a href="https://misitio.com" rel="noopener noreferrer">Texto de mi enlace</a>


Phone call and SMS links

    <a href="tel:1-408-555-5555">1-408-555-5555</a>
    <a href="sms:1-408-555-1212">New SMS Message</a

E-mail

    <a href="mailto:someone@example.com">Send email</a>

Downloadable links

    <a href="/files/adlafjlxjewfasd89asd8f.pdf" download="notes.pdf">Download Your Expense Report</as



## Get directions form (google maps)

    <form action="http://maps.google.com/maps" method="get" target="_blank">
        <label for="saddr">Enter your location</label>
        <input type="text" name="saddr"
        <input type="hidden" name="daddr" value="350 5th Ave New York, York, NY 1001B (Empire State Building)"/>
        <input type="submit" values="Get directions"
    </form>



## input tag: 

restrict uploads to specific types

    <input type="file" name="media_empty" accept="image/gif,image/jpeg,image/jpg,image/png">

autoComplete off inputs

    <input name="name_fld" type="text" autocomplete="off">

---

## Display my website (dev) on a phone

    Syntax: http://ip:port/index.html

    http://192.168.1.70:5500/index.html

---

### Nice fonts

- Cormorant Garamond
