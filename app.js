$(function() {
  // YOUR CODE HERE
  const toggleButton = $('#toggleButton')
  const myParagraph = $('#myParagraph')

  const colorButton = $('#colorButton')
  const colorDiv = $('#colorDiv')

  const addClassButton = $('#addClassButton')
  const removeClassButton = $('#removeClassButton')
  const classDiv = $('#classDiv')

  const fadeInButton = $('#fadeInButton')
  const fadeOutButton = $('#fadeOutButton')
  const fadeDiv = $('#fadeDiv')

  const slideUpButton = $('#slideUpButton')
  const slideDownButton = $('#slideDownButton')
  const slideDiv = $('#slideDiv')  


  toggleButton.on('click', function() {
    myParagraph.toggle()
  })

  colorButton.on('click', function() {
    colorDiv.css('background-color','yellow')
  })

  addClassButton.on('click', function() {
    classDiv.addClass('new-class')
  })
  removeClassButton.on('click', function() {
    classDiv.removeClass('new-class')
  })

  fadeInButton.on('click', function() {
    fadeDiv.fadeIn()
  })
  fadeOutButton.on('click', function() {
    fadeDiv.fadeOut()
  })

  slideUpButton.on('click', function() {
    slideDiv.slideUp()
  })
  slideDownButton.on('click', function() {
    slideDiv.slideDown()
  })
})