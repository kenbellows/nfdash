# nfdash
A dashboard concept for the [Nerd Fitness community](rebellion.nerdfitness.com).

Prior work:
  - creative-tim.com/product/light-bootstrap-dashboard

Tech stack:
  - [AngularJS](https://angularjs.org/)
  - [AngularUI](https://angular-ui.github.io/)
  - [Angular-nvD3](https://github.com/krispo/angular-nvd3)
  - [Bootstrap](http://getbootstrap.com/)
  - [Pixeden Icon Font Pack](http://themes-pixeden.com/font-demos/7-stroke/index.html)

## concept

I want a fancy pants sort of way to track my progress in the NerdFitness world. I like to look at pretty things.
So I figure, hey, why not a nice little dashboard?

Things I want to look at:

  * Character profile
    * character stats
    * main quest progress and stats
  * Current 6-week challenge
    * progress and stats for each mini-quest
    * reward earned so far for each mini quest
  * Previous 6-week challenges
    * (same as above)
  * Long-term trends
    * tendency to meet goals set
    * difference between goals set and accomlishments
    * character stats over time

## implementation

  * Angular app
  * Tabbed sidebar with one tab per top level section in "Things I want to look at" above
  * Customization mode for each tab to allow the user to show the stats they are interested in, use the kinds of graphs they like for each stat, etc.
  * Auto-guessing of graphs and layout based on simple questions to give the user a place to start each challenge

