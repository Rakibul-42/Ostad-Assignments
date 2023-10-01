exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Create postController API" });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "Read postController API" });
};

exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "Update postController API" });
};

exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Delete postController API" });
};
