class EntityType < Entity
  attr_accessor :name
  attr_accessor :startIndex
  attr_accessor :contentsStartIndex
  attr_accessor :contentsEndIndex

  attr_accessor :superClass
  attr_accessor :containedEntities
  attr_accessor :extensions

  def initialize(typeString, name, inheritedEntities, contentsCodeString, startIndex, contentsStartIndex, contentsEndIndex)
    super(inheritedEntities, typeString, contentsCodeString)

    @name = name
    @startIndex = startIndex
    @contentsStartIndex = contentsStartIndex
    @contentsEndIndex = contentsEndIndex

    @containedEntities = []
    @extensions = []
  end

  def to_json(*_args)
    hash = to_hash

    hash['name'] = @name

    hash['superClass'] = @superClass.id if @superClass

    unless @containedEntities.empty?
      hash['containedEntities'] = @containedEntities.map(&:id)
    end

    hash['extensions'] = @extensions.map(&:id) unless @extensions.empty?

    JSON.pretty_generate(hash)
  end
end
