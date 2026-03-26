# Technical Architecture & AI Intelligence

## 1. Data Foundation & Schema
* **Source:** Integrating the `chinese-poetry` open-source dataset for 300+ Tang poems.
* **Layering:** Every poem record supports a "Stacked Rendering" architecture:
    * **Layer A:** Original Text (Hanzi).
    * **Layer B:** Phonetic Guide (Pinyin).
    * **Layer C:** Lexicon (Official Annotations).

## 2. Local-First Persistence
To ensure zero-latency and 100% offline availability:
* **SQLite Engine:** Managing the core library and user-generated metadata.
* **State Management:** Tracking "Mastered" flags with high-precision timestamps for future review logic.

## 3. Intelligence Evolution (The AI Layer)
We are transcending traditional keyword search with advanced AI techniques:
* **Semantic Vector Search:** * Utilizing **Embeddings** to enable "Imagery-based Search."
    * Users can search for abstract moods (e.g., "Solitude in autumn") to find matching verses via Cosine Similarity.
* **LLM-Powered Insights:**
    * **Dynamic Hints:** Generating context-aware Level-3 hints for the Recitation Engine.
    * **AI Philologist:** Providing real-time, LLM-driven explanations for complex historical allusions.
