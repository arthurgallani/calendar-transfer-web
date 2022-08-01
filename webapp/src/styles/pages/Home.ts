import styled from "styled-components";

export const Container = styled.div`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    font-family: "Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    background-color: #3c373e;
    font-weight: 300;
}

body {
    margin: 0;
    font-family: "Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}
   

*, *::before, *::after {
    -webkit-box-sizing: border-box;
    /* box-sizing: border-box; */
}

.content {
    padding: 4rem 0;
}

.container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}


h2 {
    margin-bottom: 3rem!important;
    font-size: 30px;
    color: #ff520f;
    font-weight: 400;
    line-height: 1.2;
    margin-top: 0;

    font-family: "Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    padding: 25px;
    background: #2f2c30;
    border-radius: 15px;
    border: 1px solid #4f495057;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 0px 20px 10px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 29%);
}

.custom-table {
    min-width: 900px;
}

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}

table {
    border-collapse: collapse;
}


.custom-table thead tr, .custom-table thead th {
    padding-bottom: 30px;
    border-top: none;
    border-bottom: none!important;
    color: #fff;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .1rem;
}


.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}

.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

th {
    text-align: inherit;
}


.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0,0,0,.05);
}

.custom-table tbody tr {
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
}

.custom-table tbody th, .custom-table tbody td {
    color: #777;
    font-weight: 400;
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 300;
    border: none;
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
}

.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}


.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
}

.custom-table tbody tr:hover td, .custom-table tbody tr:focus td {
    color: #ffffffc4;
}

.custom-table tbody tr:hover td a, .custom-table tbody tr:focus td a {
    color: #ffffffc4;
}

.custom-table tbody tr:hover td .more, .custom-table tbody tr:focus td .more {
    color: #ff7039;
    cursor: pointer;
}

.custom-table tbody tr td .more {
    text-decoration: underline;
    text-underline-position: under;
}

.custom-table tbody th small, .custom-table tbody td small {
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
}

small, .small {
    font-size: 80%;
    font-weight: 400;
}

.d-block {
    display: block !important;
}


 button.btn-primary {
    
    height: 40px;
    background: linear-gradient(150.53deg,#ff4700 0%,#ff7039 100%);
    background-color: hsl(17deg 80% 42% / 96%);
    border: 1px solid transparent;
    box-shadow: none;
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 20%;
    min-height: 20px;
    box-sizing: border-box;
    -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    font-family: "C6 Sans Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: 400;
    line-height: 2.5;
    padding-left: 24px;
    border-radius: 30px;
    padding-right: 24px;
    -webkit-letter-spacing: 0.5px;
    -moz-letter-spacing: 0.5px;
    -ms-letter-spacing: 0.5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
}

span {
    color: hsla(0, 0%, 14%, 1);
    width: 100%;
    display: inherit;
    padding: 6px 0px;
    z-index: 1;
    position: relative;
    font-size: 0.875rem;
    align-items: inherit;
    font-family: "C6 Sans Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    justify-content: inherit;

    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s;
    display: block;
    margin-top: 16px;
    text-align: center;
}

button.btn-primary:before {
    background: #FFE45C;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0;
    z-index: 0;
    position: absolute;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: inherit;
}

button.btn-primary:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    text-decoration: none;
    
    background: linear-gradient(150.53deg, #ff7039 0%, #ff4700 100%);

}




button.btn-outline {
    background: transparent;
    border: 1px solid #ff7039;
    color: #ff7039;
    box-shadow: none;
    padding: 6px 16px;
    font-size: 0.875rem;

    height: 40px;

    box-sizing: border-box;
    -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    font-family: "C6 Sans Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: 400;
    line-height: 2.8;
    padding-left: 24px;
    border-radius: 30px;
    padding-right: 24px;
    -webkit-letter-spacing: 0.5px;
    -moz-letter-spacing: 0.5px;
    -ms-letter-spacing: 0.5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
}

span {
    color: hsla(0, 0%, 14%, 1);
    width: 100%;
    display: inherit;
    padding: 6px 0px;
    z-index: 1;
    position: relative;
    font-size: 0.875rem;
    align-items: inherit;
    font-family: "C6 Sans Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    justify-content: inherit;

    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s;
    display: block;
    margin-top: 16px;
    text-align: center;
}

button.btn-outline:before {
    background: #FFE45C;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0;
    z-index: 0;
    position: absolute;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: inherit;
}

button.btn-outline:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    text-decoration: none;

}

.box-btn {
    display: grid;
    justify-content: end;
    grid-gap: 40px;
    grid-template-columns: repeat(2,18%);
    /* grid-template-rows: repeat(2,50%); */
    padding: 30px 20px;
}

.box-btn-out {
    display: grid;
    justify-content: center;
    grid-gap: 40px;
    grid-template-columns: repeat(2,45%);
}


.container-box-card {
    display: grid;
    justify-content: center;
    
}


.box-card {
    /* display: grid; */
    /* -webkit-box-pack: center; */
    grid-template-rows: auto;
    /* -webkit-justify-content: center; */
    -ms-flex-pack: center;
    /* justify-content: center; */
    width: 500px;
    /* display: block; */
    overflow-x: auto;
    padding: 35px;
    background: #2f2c30;
    border-radius: 30px;
    border: 1px solid #4f495057;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 0px 20px 10px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 29%);
    

}

.box-description {
    display: grid;
    grid-template-rows: auto;
    width: 500px;
    overflow-x: auto;
    padding: 35px;
    justify-content: center;
    background: transparent;
}


.box-description h1 {
    font-size: 42px;
    color: #ff7039;
}

.box-description p {
    color: #ffffff82;
    display: grid;
    justify-content: center;
}



.form-box-card {
    display: grid;
    grid-gap: 30px;
}

.input-box-card {
    border-radius: 30px;
    height: 40px;
    background: #242424;
    border: transparent;
    padding: 10px 55px;
    background-color: rgba(0,0,0,0.05);
    color: #ffffffc9;
    border: 1px solid #ff470042;
}

.label-box-card {
    border-radius: 30px;
    height: 40px;
    background: #242424;
    border: transparent;
    padding: 8px 55px;
    display: grid;
    background-color: rgba(0,0,0,0.05);
    color: #ffffffc9;
    border: 1px solid #ff470042;
    justify-content: center;
    grid-gap: 35px;
    grid-template-columns: repeat(2,48%);
}

.label-box-card p.result {
    font-weight:500;
}

.input-box-card::placeholder { 
    #ffffffdb;
  opacity: 1; 
}

.input-box-card:focus, .input-box-card:focus-visible {
    border: 1px #ff4700 solid;
}



`