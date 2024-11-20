# CountDownProject
A Simple Count-down project to utilize js functions

js code utilization -
----------------------------------------------------------------------------------------------------------------------------------
*Set the target end date:
                 The endDate variable contains the deadline in a readable string format.
*Display end date:
                document.getElementById("end-date").innerText = endDate; ensures that the end date is shown on the webpage.
*Select inputs: 
               querySelectorAll targets input elements (for days, hours, minutes, and seconds) to dynamically update their values.
*Calculate time difference:
                Subtract the current date (now) from the target date (end) to get the difference in seconds.
*Convert time units: 
                Convert the difference into days, hours, minutes, and seconds, using mathematical operations.
*Update inputs: 
                Update each input field with the calculated values.
*Initial and recurring updates: 
                The clock function is called initially to set the timer immediately and then every second using setInterval.
