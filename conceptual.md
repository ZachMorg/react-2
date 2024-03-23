### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
**It allows for client-side routing**

- What is a single page application?
**It is an appliation that runs without refreshing the page**

- What are some differences between client side and server side routing?
**server side routing is a bit slower since everything on the page is refreshed, but only the things that are changed are refreshed in client side routing**

- What are two ways of handling redirects with React Router? When would you use each?
**useNavigate and redirect. I'm not too sure how they are different**

- What are two different ways to handle page-not-found user experiences using React Router?
**Using either a Route to check for any invalid routes and redirecting to an error component,**
**or using a conditional and state to check for invalid parameters and redirecting to an error component**

- How do you grab URL parameters from within a component using React Router?
**By using useParams**

- What is context in React? When would you use it?
**It is data used globally across an app. It is used for if multiple components need the same data**
**or if a child component needs that data**

- Describe some differences between class-based components and function
  components in React.
**class-based components need 'this.' infront of every variable and function it uses. They also don't use hooks.**

- What are some of the problems that hooks were designed to solve?
**They allowed to create strictly function based components. This allowed for cleaner and shorter code.**