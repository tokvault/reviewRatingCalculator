<!DOCTYPE html>
<html>
<head>
  <title>Google Rating Calculator</title>
  <style>
    /* CSS Styles */
    /* Container Styles */
    #rating-calculator-container {
      font-family: 'Muli', sans-serif;
      max-width: 400px;
      margin: 0 auto;
      padding: 30px;
      text-align: center;
      border: 2px solid #818482;
      border-radius: 5px;
      background-color: #333333;
    }
    
    /* Heading Styles */
    #rating-calculator-container h1, #rating-calculator-container h2 {
      color: #FFFFFF;
    }
    
    /* Label Styles */
    #rating-calculator-container label {
      display: block;
      margin-top: 10px;
      margin-bottom: 5px;
      text-align: left;
      color: #FFFFFF;
    }
    
    /* Input Styles */
    #rating-calculator-container input {
      width: 100%;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    
    /* Button Styles */
    #rating-calculator-container button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      background-color: #D6F705;
      color: #333333;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    /* Result Heading Styles */
    #rating-calculator-container h3 {
      margin-top: 30px;
      color: #FFFFFF;
    }
    
    /* Paragraph Styles */
    #rating-calculator-container p {
      margin-top: 10px;
      text-align: center;
    }
    
    /* Result Span Styles */
    #rating-calculator-container p span.result {
      font-weight: bold;
      color: #FF0000; /* Change the color to your desired color using a hexadecimal color code */
    }
  </style>
  <script>
    /* JavaScript for Google Rating Calculation */
    function calculateGoogleRating() {
      var currentRating = parseFloat(document.getElementById("currentRating").value);
      var desiredRating = parseFloat(document.getElementById("desiredRating").value);
      var currentReviews = parseInt(document.getElementById("currentReviews").value);

      var difference = desiredRating - currentRating;
      var numberOf5StarReviewsNeeded = (difference * currentReviews) / (5 - desiredRating);

      document.getElementById("numberOf5StarReviewsNeeded").innerHTML = "<span class='result'>" + Math.ceil(numberOf5StarReviewsNeeded) + "</span>";
    }
  </script>
</head>
<body>
  <div id="rating-calculator-container">
    <!-- Calculator Title -->
    <h1>Google Rating Calculator</h1>
    <h2>Calculate 5-Star Reviews Needed</h2>

    <!-- Input Fields -->
    <label for="currentRating">Current Rating:</label>
    <input type="number" id="currentRating" step="0.1" />

    <label for="desiredRating">Desired Rating:</label>
    <input type="number" id="desiredRating" step="0.1" />

    <label for="currentReviews">Current Number of Reviews:</label>
    <input type="number" id="currentReviews" />

    <!-- Calculate Button -->
    <button onclick="calculateGoogleRating()">Calculate Reviews Needed</button>

    <!-- Results -->
    <h3>Results:</h3>
    <p>
      Number of 5-Star Reviews Needed: <span id="numberOf5StarReviewsNeeded"></span>
    </p>
  </div>
</body>
</html>
