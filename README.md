# Avondalien Software Homepage

This React single page app is the homepage for my engineering consultancy, Avondalien Software LLC. I took some shortcuts to launch the site quickly, 
but also invested in automated deployment with github actions so that changes can be launched quickly. 

## Architecture
The repo contains two software modules deployed to [Cloudflare Workers](https://workers.cloudflare.com). I chose cloudflare for hosting because 
of its generous free tier. I've also found the wrangler utility delightful to work with! 

### User Interface
The UI is client side rendered react with Material UI design system. Although the site is currently a single page, I organized it with a 
few features that will make it easier to extend in the future. Specifically I included the React Router and separated the navigation and footers 
from the home page. It is a to-do item to remove the deeply coupled links from the nav bar. 

The page is careful to use semantic html throughout, which assists screen readers in navigating the page, and should also help with SEO. 

The most complicated feature is the contact form. This was important to include so that a prospective client would not experience the friction 
of opening the email client when they clicked on my address. Of note is the separation of the network calls to the server within a http client. 
Were I to introduce unit testing to this repo with jest, the test cases would be straightforward. 

### Server Side
The server worker receives the payload from the UI and forwards it to an AWS SNS Topic which ultimately forwards the request to my email inbox. 
This strategy is convenient because cloudflare hosts the worker behind the same domain which removes the hassle of configuring CORS headers on 
the server. 

Cloudflare workers run in V8 isolates; they do not have access to the file system like a node runtime does. Communicating between cloudflare and 
AWS became non-trivial because the AWS SDK attempts to read the file system for credentials. I had to learn how to cryptographically sign the AWS 
REST requests. 

In the future the server side code will be refactored to use Cloudflare's chanfana framework. 

### Deployment
On merge to main, which must be done by pull request, the worker downloads cloudflare wrangler to build the project and push to cloudflare. 
Of note is the use of github secrets to hold the cloudflare credentials. Similarly the secrets manager is used within cloudflare to hold 
the aws credentials required for the worker to communicate with SNS. 

### Learnings
This was a quick and dirty setup to launch my page before attending the US-RSE conference in October 25. I think the page is fine for a project of 
its size and number of contributors. However, I would start development of the worker with the Chamfana request handling framework in the future. 
