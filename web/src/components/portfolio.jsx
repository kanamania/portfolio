import React, {Component} from "react";
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

class Portfolio extends Component {
    state = {
        getAllPortfolio: [
            {
                id: 1,
                name: "Project 1",
                category: "Website",
                technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'React'],
            },
            {
                id: 2,
                name: "Project 2",
                category: "Website",
                technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'React'],
            },
            {
                id: 3,
                name: "Project 3",
                category: "Web App",
                technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'React'],
            },
            {
                id: 4,
                name: "Project 4",
                category: "Web App",
                technologies: ['Python', 'Django', 'MongoDB', 'JavaScript', 'React'],
            },
            {
                id: 5,
                name: "Project 5",
                category: "Mobile App",
                technologies: ['Cordova', 'Ionic', 'JavaScript', 'Angular'],
            },
            {
                id: 6,
                name: "Project 6",
                category: "Mobile App",
                technologies: ['JavaScript', 'React Native'],
            },
        ],
        portfolio: [],

        technologies: [
            "All",
            "PHP",
            "Laravel",
            "Yii",
            "Python",
            "Django",
            "JavaScript",
            "Express",
            "React",
            "Angular",
            "MongoDB",
            "MySQL",
            "Postgres",
            "HTML",
            "CSS",
        ],
        categories: [
            "All",
            "Websites",
            "Web Apps",
            "Mobile Apps",
        ],
        selectedCategory: "All",
        selectedTechnology: "All",
    };
    filterItems = (category, technology) => {
        // event.preventDefault();

        if (category === "All") {
            this.setState({
                selectedCategory: category,
                selectedTechnology: technology,
                portfolio: this.state.getAllPortfolio,
            });
        } else {
            this.setState({
                selectedCategory: category,
                selectedTechnology: technology,
                portfolio: this.state.getAllPortfolio.filter(
                    (item) => item.category === category
                ),
            });
        }
    }

    componentDidMount() {
        this.filterItems('All', 'All');
    }

    render() {
        const portfolioItems = this.state.portfolio.map((item) => (
            <Card className='card' key={item.id}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://placehold.co/400"
                />
                <CardContent className='card-bottom'>
                    <Typography gutterBottom variant="h6" component="div"
                                sx={{textAlign: 'left', m: 0}}>{item.name}</Typography>
                    <Typography gutterBottom variant="p" component="div"
                                sx={{textAlign: 'left', m: 0, fontSize: 12, pb: '0px'}}>{item.category}</Typography>
                </CardContent>
            </Card>
        ));

        const categoriesList = this.state.categories.map((cat, index) => (
            <Button key={index}
                    className={cat === this.state.selectedCategory ? "selected" : ""}
                    onClick={() => this.filterItems(cat, this.state.selectedCategory)}
            >
                {cat}
            </Button>
        ));
        const technologiesList = this.state.technologies.map((tech, index) => (
            <Button key={index}
                    className={tech === this.state.selectedTechnology ? "selected" : ""}
                    onClick={() => this.filterItems(this.state.selectedCategory, tech)}
            >
                {tech}
            </Button>
        ));

        return (
            <Grid>
                <Grid container sx={{textAlign: 'left', ml: '10px'}} className="bio">
                    <Grid item xs={12} sm={3}>
                        <img src="https://placehold.co/300x200"/>
                    </Grid>
                    <Grid sx={{textAlign: 'left', pl: '30px'}} item xs={12} sm={9}>
                        <h3>John Doe</h3>
                        <p>I have been a working Software Developer for 8+ years. I have worked on many projects from small single page websites to organization ERPs. I have experience using Python, PHP, JavaScript/TypeScript, and others. I have worked with many frameworks/libraries such as Symfony, CodeIgniter, Laravel, Django, Express.js, Nest.js, React/Next.js, Angular, Ionic, etc. I have worked on CMS, CRM, Accounting Systems, ERPs and more. For more info please check my resume below.</p>
                    </Grid>
                </Grid>
                <Grid className="all-content">
                    <Grid>
                        <Grid className="header">
                            <h3 className='heading'>Portfolio</h3>
                            <a href="http://localhost:7000/resume.pdf" target="_blank">Resume</a> </Grid>
                        <Grid className="categories">
                            <Typography className="title" gutterBottom variant="h6" component="div"
                                        sx={{textAlign: 'left', m: 0}}>Project Type</Typography>
                            <div className="content">{categoriesList}</div>
                        </Grid>
                        <Grid className="technologies">
                            <Typography className="title" gutterBottom variant="h6" component="div"
                                        sx={{textAlign: 'left', m: 0}}>Technologies</Typography>
                            <div className="content">{technologiesList}</div>
                        </Grid>
                    </Grid>
                    <Grid sx={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                        {portfolioItems}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Portfolio;
