import Project from "./Project";
import {
  Text,
  Heading,
  Container,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";

const Projects = () => {
  //const [projects, setProjects] = useState([]);

  const projects = [
    {
      name: "react-projects",
      preview:
        "https://res.cloudinary.com/lifecodes/image/upload/v1642260159/react-projects/sc1tc2xfknk3at2z2nge.png",
      view: "https://sanjeev-react-projects.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/reactprojectss/tree/master/frontend",
    },
    {
      name: "Weather App",
      preview:
        "https://res.cloudinary.com/lifecodes/image/upload/v1641129791/react-projects/l6f13nm7vrqafoolxnq3.png",
      view: "https://weatherapp-react-project.netlify.app/",
      code: "https://github.com/sanjeevkumar-works/contact-manager",
    },
    {
      name: "Markdown APP",
      preview:
        "https://res.cloudinary.com/lifecodes/image/upload/v1641129771/react-projects/ph8yfdtakenz4uajzxnq.png",
      view: "https://markdown-editer.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/reactprojects/tree/main/markdown-editor",
    },
    {
      name: "Crypto-Tracker",
      preview:
        "https://res.cloudinary.com/lifecodes/image/upload/v1641129839/react-projects/xnalszs4l4lbrxqpdo8x.png",
      view: "https://sanjeev-crypto-tracker.netlify.app/",
      code: "https://github.com/sanjeevkumar-works/contact-manager",
    },
    {
      name: "Contact Manager",
      preview:
        "https://res.cloudinary.com/lifecodes/image/upload/v1641129869/react-projects/m8gt7erkcesomwizevon.png",
      view: "https://sanjeev-contact-manager.netlify.app/",
      code: "https://github.com/sanjeevkumar-works/contact-manager",
    },
    {
      name: "react-todo",
      preview:
        "https://res.cloudinary.com/lifecodes/image/upload/v1641129815/react-projects/mlrtve1rr1w3znspmhd6.png",
      view: "https://sanjeev-todo-app.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/reactprojects/tree/main/basic-todo",
    },
    {
      name: "Redux-ecart",
      preview:
        "https://res.cloudinary.com/lifecodes/image/upload/v1642260123/react-projects/uvyvexgfql6yiaa9gwu1.png",
      view: "https://sanjeev-redux-ecom.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/reactprojects/tree/main/redux-ecom",
    },
  ];

  return (
    <Container maxW={"full"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW={"6xl"} pt={2}>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "3xl", sm: "5xl" }}
          my={4}
          fontWeight={600}
          color={"cyan.500"}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "5%",
              position: "absolute",
              bottom: -1.5,
              left: 0,
              bg: useColorModeValue("gray.600", "gray.300"),
              zIndex: 1,
            }}
          >
            Basic Projects
          </Text>
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
          py={5}
        >
          {projects
            .map((project) => <Project {...project} key={project._id} />)
            .reverse()}
        </Grid>
      </Container>
    </Container>
  );
};

export default Projects;
