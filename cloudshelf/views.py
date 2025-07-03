from django.views.generic import TemplateView

class WelcomeScreen(TemplateView):
    template_name = "cloudshelf/welcome_screen.html"
