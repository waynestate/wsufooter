<template>
    <div class="wsufooter">
        <div class="wsuwrap">
            <div class="privacy">
                <p><a href="https://wayne.edu/policies/">Privacy and University Policies</a></p>
            </div>
            <div class="copyright">
                <p><a href="https://wayne.edu/">Wayne State University</a> &copy; {{ (new Date()).getFullYear() }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
/*--------------------------------------------------------------
    Wrapper
--------------------------------------------------------------*/
.wsuwrap {
    display: table;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/*--------------------------------------------------------------
    WSU Footer
--------------------------------------------------------------*/
.wsufooter {
    background: #b1c5c2; /* Old browsers */
    background: linear-gradient(to bottom, #b1c5c2 0%,#cbdbd9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b1c5c2', endColorstr='#cbdbd9',GradientType=0 ); /* IE6-9 */
    border-top: 1px solid #536461;

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8em;
        margin: 0;
        padding: 6px 0;
    }

    a {
        color: #0C5449;
        text-decoration: underline;
    }

    a:hover {
        text-decoration: none;
    }

    .privacy,
    .copyright {
        text-align: center;
    }
}

@media (min-width: 450px) {
    .wsufooter .privacy {
        text-align: left;
        display: table-cell;
    }

    .wsufooter .copyright {
        text-align: right;
        display: table-cell;
    }
}

/*--------------------------------------------------------------
    Print
--------------------------------------------------------------*/
@media print {
    .wsufooter .privacy {
        display: none;
    }

    .wsufooter .copyright a {
        color: black;
        text-decoration: none;
    }
}
</style>

