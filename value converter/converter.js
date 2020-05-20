document.getElementById('output').style.visibility = 'hidden';
document.getElementById('input_mm').addEventListener('input', function(m){
    document.getElementById('output').style.visibility = 'visible';
    let milliMeters = m.target.value;
    document.getElementById('output_cm').value = milliMeters/10;
    document.getElementById('output_inches').value = (milliMeters*393701)/10000000;
    document.getElementById('output_foots').value = (milliMeters*328084)/100000000;
    document.getElementById('output_meters').value = milliMeters/1000;
    document.getElementById('output_km').value = milliMeters/1000000;
});