import styled from "styled-components";

export const Content = styled.div`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    font-family: "Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
    padding: 7rem 0;
}

.container {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}


h2 {
    margin-bottom: 3rem!important;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
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



button {
    background: linear-gradient(150.53deg, #FFE45C 0%, #FFC900 100%);
    background-color: hsl(46, 100%, 59%);
    border: 1px solid transparent;
    box-shadow: none;
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "C6 Sans Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    line-height: 1.29;
    padding-left: 24px;
    border-radius: 1.5rem;
    padding-right: 24px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    
    cursor: pointer;
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
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

    display: block;
    margin-top: 16px;
    text-align: center;
}

button:before {
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

button:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    text-decoration: none;
    max-width: 340px;

}

`