window.onload = function () {
    $(document).ready(function () {

        // Name of the months (0-January :: 11-December)
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        // Current Time on Iphone 11
        let currentTime = new Date();
        document.getElementById('currentTime').innerText = ("0" + Number(currentTime.getHours())).slice(-2) + ' : ' + ("0" + Number(currentTime.getMinutes())).slice(-2);

        $('.deleteBudget').click(function () {
            let deleteButtonElement = this;
            let categoryId = lastElement(splitElement(this.id, '-'));

            // Show the material spinner and hide the delete button
            document.getElementById('deleteElementSpinner-' + categoryId).classList.toggle('d-none');
            this.classList.toggle('d-none');

            setTimeout(function () {
                document.getElementById('deleteElementSpinner-' + categoryId).classList.toggle('d-none');
                deleteButtonElement.classList.toggle('d-none');
            }, 3000);
        });


        // Set the value and percentage of the progress bar
        let progressBar1 = document.getElementById('progress-budget-4');
        progressBar1.setAttribute('aria-valuenow', 100);
        progressBar1.style.width = 100 + '%';

        // Update the percentage in progress bar
        let progressBar2 = document.getElementById('progress-budget-5');
        progressBar2.setAttribute('aria-valuenow', 28);
        progressBar2.style.width = 28 + '%';

        let goalsProgressBar = document.getElementById('goals-progress-bar')
        goalsProgressBar.setAttribute('aria-valuenow', 50);
        goalsProgressBar.style.width = 50 + '%';


        // Build the data for the line chart
        let dataSimpleBarChart = {
            labels: ['Beauty', 'Bills & Fees', 'Family & Personal', 'Shopping', 'Home', 'Travel', 'Other'],
            series: [100, 800, 600, 120, 800, 500, 1200]
        }

        // Build pie chart on iphone 11
        buildPieChart(dataSimpleBarChart, 'chatist-pie', 4120);

        // Animate values on Iphone 11
        animateValue(document.getElementById('averageExpenseAmountIphone'), 2000, 2834, '-€', 2000);

        // Build pie chart on iphone 11
        buildPieChart(dataSimpleBarChart, 'chatist-pie2', 4120);

        // Current Date
        let currentDate = document.getElementsByClassName('current-date');
        for (let i = 0, len = currentDate.length; i < len; i++) {
            let cr = currentDate[i];
            cr.textContent = months[currentTime.getMonth()] + ' ' + currentTime.getFullYear();
        }

        // Previous Date
        let previousDate = document.getElementsByClassName('previous-date');
        for (let i = 0, len = previousDate.length; i < len; i++) {
            let pr = previousDate[i];
            pr.textContent = months[currentTime.getMonth() - 1] + ' ' + currentTime.getFullYear();
        }

    });
}
