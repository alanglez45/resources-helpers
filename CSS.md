# **CSS Helpers**

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

---

## Font size

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

---

## IMG Responsive

    img {
        max-width: 100%;
    height: auto;
    }

    img {
        width: 100%;
    }

---

## a Tag (safe links)

    <a href="https://misitio.com" rel="noopener noreferrer">Texto de mi enlace</a>

---

## Phone call and SMS links

    <a href="tel:1-408-555-5555">1-408-555-5555</a>
    <a href="sms:1-408-555-1212">New SMS Message</a

---

## Downloadable links

    <a href="/files/adlafjlxjewfasd89asd8f.pdf" download="notes.pdf">Download Your Expense Report</as

---

## Get directions form (google maps)

    <form action="http://maps.google.com/maps" method="get" target="_blank">
        <label for="saddr">Enter your location</label>
        <input type="text" name="saddr"
        <input type="hidden" name="daddr" value="350 5th Ave New York, York, NY 1001B (Empire State Building)"/>
        <input type="submit" values="Get directions"
    </form>

---

## Restrict uploads to specific types

    <input type="file" name="media_empty" accept="image/gif,image/jpeg,image/jpg,image/png">

---

## AutoComplete off inputs

    <input name="name_fld" type="text" autocomplete="off">

---

## Display my website (dev) on a phone

    http://ip:port/index.html

    http://192.168.1.70:5500/index.html

---

### Nice fonts

- Cormorant Garamond
