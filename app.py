from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to interact with backend

# Replace this with your own OpenAI API key
openai.api_key = "cab8c58cefaf48d996592ea582be92bb"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    question = data.get("question", "")
    if not question:
        return jsonify({"answer": "Please ask a valid Python-related question."})

    try:
        # Query OpenAI GPT API
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a Python programming learning assistant."},
                {"role": "user", "content": question}
            ]
        )
        answer = response['choices'][0]['message']['content']
        return jsonify({"answer": answer.strip()})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"answer": "Sorry, I encountered an error. Please try again."})

if __name__ == "__main__":
    app.run(debug=True)
