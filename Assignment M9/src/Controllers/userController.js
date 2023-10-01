exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Create userController API" });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "Read userController API" });
};

exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "Update userController API" });
};

exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Delete userController API" });
};
