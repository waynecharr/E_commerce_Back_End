const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Finds all tags and products through ProductTag
router.get('/', async (req, res) => {
  try {
    // Finds the tag through findAll and includes the Product through ProductTag
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }], 
    });

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Finds a tag by its ID values through its associated Product Data
router.get('/:id', async (req, res) => {
  try {

    // Finds the tag through findOne and includes the Product through ProductTag
    const tag = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product, through: ProductTag }], 
    });

    // Check if the tag exists
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new tag
router.post('/', async (req, res) => {
  try {
    const tags = await Tag.create(req.body);
    res.status(200).json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Updates a tag by its ID value
router.put('/:id', async (req, res) => {
  try {
    const updatedTagName = req.body.tag_name;

    const [rowsUpdated] = await Tag.update(
      { tag_name: updatedTagName },
      {
        where: { id: req.params.id },
      }
    );

    // Check if no tag with the given id was updated, different way of writing it
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    // Fetch the updated tag data after the update
    const updatedTag = await Tag.findByPk(req.params.id);

    res.status(200).json(updatedTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Deletes a tag by its ID value
router.delete('/:id', async (req, res) => {
  try {
    const deletedRowCount = await Tag.destroy({
      where: { id: req.params.id },
    });

    // Looks to see if there's no tag or if it was deleted.
    if (deletedRowCount === 0) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    // Error message sent to user.
    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
