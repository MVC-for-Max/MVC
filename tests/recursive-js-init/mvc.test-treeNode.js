
class TreeNode {
  constructor(name, parent = null) {
    this.name = name;
    this.parent = parent;
    this.children = new Set();
  }

  /* =======================
     URL calculée dynamiquement
     ======================= */
  get url() {
    if (!this.parent) return `/${this.name}`;
    return `${this.parent.url}/${this.name}`;
  }

  /* =======================
     Enregistrement
     ======================= */
  addChild(childName) {
    const child = new TreeNode(childName, this);
    this.children.add(child);
    this.notifyChange("add", child);
    return child;
  }

  /* =======================
     Dé-senregistrement
     ======================= */
  removeChild(child) {
    if (this.children.has(child)) {
      this.children.delete(child);
      child.parent = null;
      this.notifyChange("remove", child);
    }
  }

  /* =======================
     Notification des parents
     ======================= */
  notifyChange(type, node) {
    this.onSubtreeChange(type, node);

    if (this.parent) {
      this.parent.notifyChange(type, node);
    }
  }

  /* =======================
     Hook de notification
     ======================= */
  onSubtreeChange(type, node) {
    console.log(
      `[NOTIFY] ${this.url} -> ${type.toUpperCase()} ${node.url}`
    );
  }
}

const root = new TreeNode("root");
const users = root.addChild("users");
const admin = users.addChild("admin");
const settings = admin.addChild("settings");

// URLs
post(settings.url, "\n");
// /root/users/admin/settings

// Suppression
users.removeChild(admin);
post(admin.url, "\n");
