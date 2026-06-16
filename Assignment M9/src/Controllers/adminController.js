exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Create adminController API" });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "Read adminController API" });
};

exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "Update adminController API" });
};

exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Delete adminController API" });
};
