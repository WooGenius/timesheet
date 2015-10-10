FlowRouter.route('/', {
    action(params, queryParams) {
      ReactLayout.render(MainLayout, {
        content: <WelcomeComponent name="Arunoda" />
      });
    }
});
