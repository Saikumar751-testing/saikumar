# Customer Data Platform (CDP) Chatbot

This chatbot is designed to answer "how-to" questions related to four Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap. It can extract relevant information from the official documentation of these platforms and guide users on how to perform tasks or achieve specific outcomes within each platform.

## Features
- **Answer "How-to" Questions**: The chatbot can understand and respond to user questions about how to perform specific tasks or use features within each CDP.
- **Extract Information from Documentation**: It retrieves instructions directly from the official documentation of each platform.
- **Handle Variations in Questions**: The chatbot is capable of handling questions with different phrasing or length variations.
- **Cross-CDP Comparisons**: It can answer questions about the differences between the platforms (e.g., differences in audience creation processes).
- **Advanced "How-to" Questions**: The chatbot can handle complex platform-specific questions, integrations, or configurations.

## Data Sources
The chatbot extracts information from the following documentation:
- **Segment Documentation**: [Segment Docs](https://segment.com/docs/?ref=nav)
- **mParticle Documentation**: [mParticle Docs](https://docs.mparticle.com/)
- **Lytics Documentation**: [Lytics Docs](https://docs.lytics.com/)
- **Zeotap Documentation**: [Zeotap Docs](https://docs.zeotap.com/home/en-us/)

## Core Functionalities
1. **How-to Questions**: Answer user questions like:
   - "How do I set up a new source in Segment?"
   - "How can I create a user profile in mParticle?"
   - "How do I build an audience segment in Lytics?"
   - "How can I integrate my data with Zeotap?"
   
2. **Search and Information Extraction**: The chatbot searches the provided documentation, extracts the relevant sections, and displays the necessary steps or instructions.

3. **Cross-CDP Comparisons**: The chatbot compares functionalities between different CDPs and provides guidance on how each platform handles specific tasks.

4. **Advanced Question Handling**: The chatbot can provide guidance on advanced configurations, integrations, or complex use cases.

## Technologies Used
- **Python**: For scraping documentation, indexing, and search functionalities.
- **NLP Libraries**: `spaCy`, `transformers`, `Rasa` for intent classification and question understanding.
- **Web Scraping**: `BeautifulSoup`, `Selenium` for extracting documentation content.
- **Search and Indexing**: `ElasticSearch`, `FAISS`, `Haystack` for efficient search and retrieval.
- **Web Framework**: `Flask` or `Streamlit` for building the web interface.
- **Frontend**: HTML, CSS for UI design.

## Installation

### Prerequisites
- Python 3.x
- `pip` (Python package manager)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/cdp-chatbot.git
cd cdp-chatbot
