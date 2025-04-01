 window.addEventListener('scroll', function() {
            let scrollPosition = window.scrollY;
            if (scrollPosition < 400) {
                document.body.style.backgroundColor = '#D3D3D3'; // Dark Blue
            } else if (scrollPosition < 800) {
                document.body.style.backgroundColor = '#FF6F61'; // Warm Red
            } else if (scrollPosition < 1200) {
                document.body.style.backgroundColor = '#4CAF50'; // Green
            } else if (scrollPosition < 1600) {
                document.body.style.backgroundColor = '#3F51B5'; // Cool Blue
            } else if (scrollPosition < 2000) {
                document.body.style.backgroundColor = '#D4A373'; // Desert Sand
            } else if (scrollPosition < 2400) {
                document.body.style.backgroundColor = '#5E35B1'; // Night Purple
            } else if (scrollPosition < 2800) {
                document.body.style.backgroundColor = '#FF8C42'; // Deep Orange for Desert
            } else if (scrollPosition < 3200) {
                document.body.style.backgroundColor = '#0077B6'; // Deep Ocean Blue
            } else {
                document.body.style.backgroundColor = '#001F3F'; // Darkest Ocean Blue
            }
        });
