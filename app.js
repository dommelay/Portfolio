$(() => {
    const home = () => {
        $('#home').css('display', 'block')
        $('#about').css('display', 'none')
        $('#education').css('display', 'none')
        $('#projects').hide()
        $('#project2').css('display', 'none')
        $('#project3').css('display', 'none')
        $('#project4').css('display', 'none')
        projectIndex = 0
    }
    const about = () => {
        $('#home').css('display', 'none')
        $('#education').css('display', 'none')
        $('#about').css('display', 'block')
        $('#projects').hide()
        $('#project2').css('display', 'none')
        $('#project3').css('display', 'none')
        $('#project4').css('display', 'none')
        projectIndex = 0
    }
    const projects = () => {
        $('#project1').css('display', 'block')
        $('.carousel-button').css('display', 'block')
        $('#home').css('display', 'none')
        $('#about').css('display', 'none')
        $('#education').css('display', 'none')
        $('#projects').show()
        $('#projecttypes').css('display', 'block')
    }
    const education = () => {
        $('#education').css('display', 'block')
        $('#home').css('display', 'none')
        $('#about').css('display', 'none')
        $('#projects').hide()
        $('#project2').css('display', 'none')
        $('#project3').css('display', 'none')
        $('#project4').css('display', 'none')
        projectIndex = 0
    }
    const degree = () => {
        $('#degreemodal').css('display', 'block').css('background-color', 'rgb(0, 0, 0, 0.4)')
        // $('body').css('background-color', 'rgb(0, 0, 0, 0.4)')
    }
    const underline = () => {
        $('a').css('text-decoration', 'underline')
    }
    const removeunderline = () => {
        $('a').css('text-decoration', 'none')
    }
    const degreeclose = () => {
        $('#degreemodal').css('display', 'none')
    }
    const portfolio = () => {
        $('#portfoliomodal').css('display', 'block').css('background-color', 'rgb(0, 0, 0, 0.4)')
        $('.pic1').css('display', 'block')
        portfolioIndex = 0
    }
    const closeportfolio = () => {
        $('#portfoliomodal').css('display', 'none')
        $('.pic2').css('display', 'none')
        $('.pic3').css('display', 'none')
        $('.pic4').css('display', 'none')
        $('.pic5').css('display', 'none')
        $('.pic6').css('display', 'none')
        $('.pic7').css('display', 'none')
        $('.pic8').css('display', 'none')
    }
    let projectIndex = 0
    $ptypes = $('#projecttypes')
    const numProjects = $ptypes.children().length - 1
    const next = () => {
        $ptypes.children().eq(projectIndex).css('display', 'none')
        if (projectIndex < numProjects) {
            projectIndex ++
        } else {
            projectIndex = 0
        }
        $ptypes.children().eq(projectIndex).css('display', 'block')
    }
    const previous = () => {
        $ptypes.children().eq(projectIndex).css('display', 'none')
        if (projectIndex > 0) {
            projectIndex --
        } else {
            projectIndex = numProjects
        }
        $ptypes.children().eq(projectIndex).css('display', 'block')
    }
    let portfolioIndex = 0
    $pics = $('#carouselpics')
    const numPics = $pics.children().length - 1
    const next1 = () => {
        $pics.children().eq(portfolioIndex).css('display', 'none')
       if (portfolioIndex < numPics) {
        portfolioIndex ++
       } else {
        portfolioIndex = 0
       }
       $pics.children().eq(portfolioIndex).css('display', 'block')
    }
    const previous1 = () => {
        $pics.children().eq(portfolioIndex).css('display', 'none')
        if (portfolioIndex > 0) {
            portfolioIndex --
        } else {
            portfolioIndex = numPics 
        }
        $pics.children().eq(portfolioIndex).css('display', 'block')
    }

    // const resumedrop = () => {
    //     $('#educationbttn').css('display', 'block')
    //     $('#experiencebttn').css('display', 'block')
    // }
    // const resumeup = () => {
    //     $('#educationbttn').css('display', 'none')
    //     $('#experiencebttn').css('display', 'none')
    // }
    $('#homebttn').on('click', home)
    $('#aboutbttn').on('click', about)
    $('#projectsbttn').on('click', projects)
    $('.next').on('click', next)
    $('.previous').on('click', previous)
    $('#degreebttn').on('click', degree)
    $('#closedegree').on('click', degreeclose)
    $('#resumebttn').on('click', education)
    $('.projectlink').on('mouseover', underline)
    $('.projectlink').on('mouseleave', removeunderline)
    $('.next1').on('click', next1)
    $('.previous1').on('click', previous1)
    $('#portfoliobttn').on('click', portfolio)
    $('#closeportfolio').on('click', closeportfolio)
    // $('#dropdown').on('mouseover', resumedrop)
    // $('#dropdown').on('click', resumeup)
})
//object-fit: cover;

