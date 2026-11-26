# Agent UI Spatial Lab · 空间直操交互实验室

> **Beyond Linear Chat Boxes: Spatial Co-Pilot UX Lab for AI Agents**

🌐 **Live Interactive Demo**: **[https://qingzhou1204.github.io/tools/agent-ui-lab/](https://qingzhou1204.github.io/tools/agent-ui-lab/)**

Most AI Agents force humans into a passive linear chat box: wait for a wall of text, then copy-paste to fix mistakes. **Agent UI Spatial Lab** is a zero-dependency interactive prototype exploring game-like direct manipulation and mid-flight human-agent co-piloting.

---

## ✨ 5 Core Interaction Experiments
1. **A/B Paradigm Switch**: Toggle between **Spatial Canvas (Experimental)** and **Linear Chat (Control)** in real time.
2. **Instant Pause / `Space` Emergency Brake**: Freeze execution mid-step with subtle Web Audio tactile feedback.
3. **Mid-Flight Constraint Injection**: Click or type new constraints while the Agent is running to trigger instant downstream node replanning.
4. **In-Place Takeover Editing**: Click `✋ 接管编辑` on any node to rewrite its intermediate artifact directly and hand control back to downstream steps.
5. **Decision Branching (Route A vs. B)**: Compare conservative vs. aggressive strategies side-by-side before locking the path.

## 🚀 Run Locally
Just double-click `index.html` in any modern browser—zero build tools or servers required.

## 🧪 Verify Prototype
```bash
node verify_prototype.mjs
```
