$(() => {
    const home = () => {
        $('#home').css('display', 'block')
        $('#about').css('display', 'none')
        $('#projects').hide()
        $('#project2').css('display', 'none')
        $('#project3').css('display', 'none')
        $('#project4').css('display', 'none')
        projectIndex = 0
    }
    const about = () => {
        $('#home').css('display', 'none')
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
        $('#projects').show()
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
    const resumedrop = () => {
        $('#educationbttn').css('display', 'block')
        $('#experiencebttn').css('display', 'block')
        // $resume2 = $('<button>').text('Resume').attr('id', 'resume2').prependTo('#dropdown')
        // $('#resumebttn').hide();
    }
    const resumeup = () => {
        $('#educationbttn').css('display', 'none')
        $('#experiencebttn').css('display', 'none')
        // $('#resume2').hide();
        // $('#resumebttn').show();
    }
    // const next = () => {
    //     $ptypes = $('#projecttypes')
    //     $ptypes.children().eq(1).css('display', 'block')
    //     $ptypes.children().eq(0).css('display', 'none')
    // }
    $('#homebttn').on('click', home)
    $('#aboutbttn').on('click', about)
    $('#dropdown').on('mouseover', resumedrop)
    $('#dropdown').on('click', resumeup)
    $('#projectsbttn').on('click', projects)
    $('.next').on('click', next)
    $('.previous').on('click', previous)
})