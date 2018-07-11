document.getElementById('title0').innerHTML = localStorage['title0'] || 'Editor';

document.getElementById('title').innerHTML = localStorage['title'] || '-Title-';
document.getElementById('content').innerHTML = localStorage['text'] || '-Apart-';
document.getElementById('content').innerHTML = localStorage['text'] || '-Text-';


 setInterval(function() {
      localStorage['title'] = document.getElementById('title').innerHTML;
      localStorage['text'] = document.getElementById('part').innerHTML;
	  localStorage['text'] = document.getElementById('content').innerHTML;
 }, 1000);