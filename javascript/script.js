let cursor = document.querySelector('#cursor');
        let body = document.querySelector('body'); 
        let isHoldingClick = false;

        document.onmousedown = function(e) {
            isHoldingClick = true;
            createAndAppendElement(e);
        }

        document.onmouseup = function() {
            isHoldingClick = false;
        }

        document.onmousemove = function(e){
            if (isHoldingClick) {
                createAndAppendElement(e);
            }
            body.style.backgroundPositionX = e.pageX/-4 + 'px';
            body.style.backgroundPositionY = e.pageY/-4 + 'px';
            cursor.style.top = e.pageY + 'px';
            cursor.style.left = e.pageX + 'px';
        }

        function createAndAppendElement(e) {
            let element = document.createElement('div');
            element.className = 'element';
            element.style.left = e.pageX + 'px';
            element.style.top = e.pageY + 'px';
            element.innerHTML = randomText();
            body.appendChild(element);

            setTimeout(function(){
                element.remove();
            }, 1000);
        }

        function randomText(){
            var text = ("abcdefghijklmnopqrstuvwxyz0123456789").split("");
            letter = text[Math.floor(Math.random() * text.length)];
            return letter;
        }