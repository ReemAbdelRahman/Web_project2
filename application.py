from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/chat")
def chat():
    display_name = request.form.get(display_name)

    return render_template("chat.html")

@app.route("/create_group")
def create_group():
    return render_template("create_group.html");
